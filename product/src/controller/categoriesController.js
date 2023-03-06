import categories from "../models/Categories.js";

class CategoriesController{

    static listarCategorias = (req,res) => {
        categories.find((err, categories) => {
            res.status(200).json(categories)
        })
    }

    static cadastrarCategorias = (req,res) => {
        const isValid = validate.validateBody(req.body) 
        if(isValid.error){
            res.status(500).send({messege: `${isValid.error.message} - falha ao cadastrar categoria.`})
        }
        let categoria = new categories(isValid.value);
        categorias.save((err) =>{
            res.status(201).json(categoria)
        })
    }

    static listarCategoriasPorId = async (req,res) => {
        const id = req.params.id;
          const isValid = validate.validateId(id) 

        if(isValid.error){
            res.status(500).send({messege: `${isValid.error.message} - Id não encontrado.`})
        }
        const category = await categories.findById(isValid.value);
        res.status(200).json(category)
    }
}

export default CategoriesController