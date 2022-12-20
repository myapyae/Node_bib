import Book from "../models/book.model.js"


//get books
export const getBook = async (req, res) => {
    try {
        const result = await Book.find()
        res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        console.log("Error: ", err)
    }
}

//post
export const createBook = async (req, res) => {

  try {
    const book= {
      name: req.body.name,
      author:req.body.author,
      description: req.body.description,
      year: req.body.year
      
  }
  
    const newBook = new Book(book);
        const result = await newBook.save()
        res.status(201).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        console.log("Error:", err)
    }
}
