const Habit = require('../models/habits');
// homepage controller
// module.exports.home = function(req,res){
//     Habit.find({},function(err,habits){
//         if(err){
//             Console.log('Error in fetching the habits');
//             return;
//         }
//         return res.render('home',{
//             title:"LoopBit",
//             habit_list:habits
//         });
//     })
    
// }
module.exports.home = async function(req, res) {
    try {
        const habits = await Habit.find({});
        return res.render('home', {
            title: "LoopBit",
            habit_list: habits
        });
    } catch (err) {
        console.log('Error in fetching the habits', err);
        return;
    }
}
// controller to create a habit
// module.exports.createHabit = function(req,res){
//     let days = {
//         one:"none",
//         two:"none",
//         three:"none",
//         four:"none",
//         five:"none",
//         six:"none",
//         seven:"none",
//     }
//     Habit.create({
//         habit : req.body.habit,
//         end : req.body.end,
//         description:req.body.description,
//         frequency:req.body.frequency,
//         date:Date(),
//         time:req.body.time,
//         days:days
        
//     },function(err,newHabit){
//         if(err){
//             console.log('Error in creating habit',err);
//             return;
//         }
        
//         console.log(newHabit);
//         return res.redirect('back');
//     });
// }


module.exports.createHabit = async function(req, res) {
    let days = {
        one: "none",
        two: "none",
        three: "none",
        four: "none",
        five: "none",
        six: "none",
        seven: "none",
    }
    try {
        const newHabit = await Habit.create({
            habit: req.body.habit,
            end: req.body.end,
            description: req.body.description,
            frequency: req.body.frequency,
            date: Date(),
            time: req.body.time,
            days: days
        });
        console.log(newHabit);
        return res.redirect('back');
    } catch (err) {
        console.log('Error in creating habit', err);
        return;
    }
}
// controller to delete a habit
// module.exports.deleteHabit = function(req,res){
//     let id = req.query.id;
//     Habit.findByIdAndDelete(id,function(err){
//         if(err){
//             console.log("Error in deleting Habit");
//             return;
//         }
//         return res.redirect('back');

//     });
// }
module.exports.deleteHabit = async function(req, res) {
    try {
        const id = req.query.id;
        await Habit.findByIdAndDelete(id);
        return res.redirect('back');
    } catch (err) {
        console.log("Error in deleting Habit", err);
        return;
    }
}
