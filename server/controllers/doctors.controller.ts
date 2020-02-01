import Doctors from '../models/doctors.model';


module.exports.doctors_create = function (req: any, res: any) {

    function getDaysInMonth(month: number, year: number, day: number) {
        const date = new Date(year, month, day);
        const days = [];
        while (date.getMonth() === month) {

            // Exclude weekends
            const tmpDate = new Date(date);
            const weekDay = tmpDate.getDay(); // week day
            const day = tmpDate.getDate(); // day

            if (weekDay % 6) { // exclude 0=Sunday and 6=Saturday
                days.push(day);
            }

            date.setDate(date.getDate() + 1);
        }

        return days;
    } //generates days of month without weekends

    function getSlotsTime() {
        const arrayOftime = [{time: '8:00-8:30',}, {time: '8:30-9:00'}, {time: '9:00-9:30'}, {time: '9:30-10:00'},
            {time: '10:00-10:30'}, {time: '10:30-11:00'}, {time: '11:00-11:30'}, {time: '11:30-12:00'},
            {time: '12:00-12:30'}, {time: '12:30-13:00'}, {time: '13:00-13:30'}, {time: '13:30-14:00'},
            {time: '14:00-14:30'}, {time: '14:30-15:00'}, {time: '15:00-15:30'}, {time: '15:30-16:00'}];
        return arrayOftime;
    }

    function getWorkObject(month: number, year: number, day: number) {
        const workDays = getDaysInMonth(month, year, day);
        const slotsTime = getSlotsTime();

        const workShedule = [];
        for (let i = 0; i < workDays.length; i++) {
            workShedule.push({day: workDays[i], slots: slotsTime});
        }
        return workShedule;
    }

    let monthNow = new Date().getMonth();
    let yearNow = new Date().getFullYear();
    let dayNow = new Date().getDate();
    let workSchedule = getWorkObject(monthNow, yearNow, dayNow);

    let doctors = new Doctors(
        {
            doc_name: req.body.doc_name,
            speciality: req.body.spec,
            desc: req.body.desc,
            img: req.body.img,
            work_schedule: workSchedule
        }
    );


    doctors.save(function (err: any) {
        if (err) {
            return res.send('Doctors Created Error');
        } else {
            return res.status(201).json({doctors});
        }
    });
};

module.exports.doctors_details = function (req: any, res: any) {
    Doctors.find(function (err: any, doctors: any) {
        if (err) {
            return res.send('Doctors Read Error');
        }
        return res.status(200).json({doctors});
    });
};

module.exports.doctors_update = function (req: any, res: any) {
    const {doc_name, selected_day, selected_time, user_tel, user_name, booked} = req.body;

    Doctors.findOne({doc_name: doc_name}, function (err: any, doc: any) {
        if (err) {
            return res.send('Doctors Update Error');
        } else {
            doc.work_schedule[selected_day].slots[selected_time].booked = booked;
            doc.work_schedule[selected_day].slots[selected_time].user_tel = user_tel;
            doc.work_schedule[selected_day].slots[selected_time].user_name = user_name;
            doc.save();

            return res.status(200).json({doc});
        }
    });
};

module.exports.doctors_delete = function (req: any, res: any) {
    Doctors.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            return res.send('Doctors Delete Error');
        }
        return res.status(204).send("Doctor deleted");
    });
};