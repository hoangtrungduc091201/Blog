const Course = require('../models/Course.js')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController{

    //  [Get] /
    index(req, res, next){
        //promise
        Course.find({})
        
            .then(courses => {
                // courses= courses.map(course =>  course.toObject());
                //phai them dong tren vi loi bao mat cua handlebars 4.6.0+

                res.render('home',{
                     courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    //  [GET] /search
    search(req, res){
        res.render('search');
    }
}
module.exports =new SiteController;