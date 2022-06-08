const mongoose = require('mongoose');

const TutorialSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          trim: true,
          required: [true, 'Please provide title name'],
          maxlength: [100, 'Title can not be more than 100 characters'],
        },

        
            id: {
              type: Number,
             
              required: [true, 'Please provide tutorial ID'],
              default :0
            },
            description: {
                type: String,
                required: [true, 'Please provide product description'],
                maxlength: [1000, 'Description can not be more than 1000 characters'],
              },
              published :{
                  type :Boolean,
                  default:false
              }
    })
    module.exports = mongoose.model('tutorial', TutorialSchema)