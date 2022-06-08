const Tutorial = require('../model/tutorial')
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors/badrequest')

const AddTutorial =async (req,res) =>{
    console.log("coming inside")
    const {title, description} = req.body;

    if(!title || !description) {
        throw new BadRequestError('Please provide title and description')

    }
    const id = new Date().getDate()

  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  const token = jwt.sign({ id, title }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  const tutorial = await Tutorial.create(req.body)
  res.status(201).json({ tutorial })

//   res.status(200).json({ msg: 'Tutorial Added', token });
}

const getAllTutorials = (async (req, res) => {
    const tutorial = await Tutorial.find({})
    let data =[];
    tutorial.map(item=>{
        data.push({"title":item.title,"description": item.description,'id':item._id,"published":item.published})
    })
    res.status(200).json({data })
  })

  const findTutorialByTitle = async(req,res)=>{
      const title = req.params.title;
      const tutorial = await Tutorial.find({title:req.params.title})
      res.status(200).json({ tutorial })
  }
  const deleteTutorialById = async(req,res)=>{
      const id = req.params.id;
      console.log(id,"id---->>>>")
      const deleteById = await Tutorial.findByIdAndRemove({_id:id})
      res.status(200).json({deleteById})
  }

module.exports ={
    AddTutorial,
    getAllTutorials,
    findTutorialByTitle,
    deleteTutorialById
}