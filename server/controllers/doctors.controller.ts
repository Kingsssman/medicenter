import Doctors from '../models/doctors.model';


module.exports.doctors_create = function (req: any, res: any) {

    function getDaysInMonth(month: number, year: number) {
        month--;
        const date = new Date(year, month, 1);
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
        const arrayOftime = [{
            time: '8:00-8:30',
            booked: req.body.booked
        }, {time: '8:30-9:00'}, {time: '9:00-9:30'}, {time: '9:30-10:00'},
            {time: '10:00-10:30'}, {time: '10:30-11:00'}, {time: '11:00-11:30'}, {time: '11:30-12:00'},
            {time: '12:00-12:30'}, {time: '12:30-13:00'}, {time: '13:00-13:30'}, {time: '13:30-14:00'},
            {time: '14:00-14:30'}, {time: '14:30-15:00'}, {time: '15:00-15:30'}, {time: '15:30-16:00'}];
        return arrayOftime;
    }

    function getWorkObject(month: number, year: number) {
        const workDays = getDaysInMonth(month, year);
        const slotsTime = getSlotsTime();

        const workShedule = [];
        for (let i = 0; i < workDays.length; i++) {
            workShedule.push({day: workDays[i], slots: slotsTime});
        }
        return workShedule
    }

    let monthNow = new Date().getMonth() + 1;
    let yearNow = new Date().getFullYear();

    let doctors = new Doctors(
      {
          doc_name: req.body.doc_name,
          speciality: req.body.spec,
          desc: req.body.desc,
          img: req.body.img,
          work_schedule: getWorkObject(monthNow, yearNow)
          // work_schedule: [{
          //     day: req.body.day,
          //     slots: [
          //         {
          //             booked: req.body.booked,
          //             user_tel: req.body.user_tel,
          //             user_name: req.body.user_name,
          //             time: req.body.time,
          //         },
          //     ]
          // }]
      }
    );


    doctors.save(function (err: any) {
        if (err) {
            res.send('Doctors Created Error');
            console.log(err);
        } else {
            res.send('Doctors Created successfully');
        }
    });
};

module.exports.doctors_details = function (req: any, res: any) {
    Doctors.find(function (err: any, doctors: any) {
        if (err) {
            res.send('Doctors Read Error');
            console.log(err);
        }
        res.send(doctors);
    });
};

module.exports.doctors_update = function (req: any, res: any) {
    Doctors.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err: any, doctors: any) {
        if (err) {
            res.send('Doctors Update Error');
            console.log(err);
        }
        res.send('doctors udpated.');
    });
};

module.exports.doctors_delete = function (req: any, res: any) {
    Doctors.findByIdAndRemove(req.params.id, function (err: any) {
        if (err) {
            res.send('Doctors Delete Error');
            console.log(err);
        }

        res.send('Deleted successfully!');
    });
};