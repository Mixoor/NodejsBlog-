//

const {body} = require("express-validator/check");

const validateRegistrationBody=()=>{

    return [
        body("name")
        .exists()
        .withMessage("name field is required")
        .isLength({min:3})
        .withMessage("name must has more than 3 letters"),
        body("email")
        .exists()
        .withMessage("email is required")
        .isEmail()
        .withMessage("email is invalid"),
        body("password")
        .exists()
        .withMessage("Password field is required")
        .isLength({min:8,max:12})
        .withMessage("Password field must be between 8 to 12 charracters long"),
        body("picture")
        .exists()
        .withMessage("Picture field is required")
    ];

}


const validateLoginBody=()=>{
    return [
        body("email")
        .exists()
        .withMessage("email field is required")
        .isEmail()
        .withMessage("Email is invalid"),
        body("password")
        .exists()
        .withMessage("Password field is required")
        .isLength({min:8,max:12})
        .withMessage("Password field must be between 8 to 12 charracters long")

    ];
}


const validateArticleBody=()=>{
    return [
        body("title")
        .exists()
        .withMessage("Title field is required")
        .isLength({min:3})
        .withMessage("Title must be greater than 3 letters"),
        body("content")
        .exists()
        .withMessage("Content field is required")
        .isLength({min:15})
        .withMessage("Content must be greater than 30 characters")

    ];
}


const validateCommentBody=()=>{
    return [
        body("content")
        .exists()
        .withMessage("Content field is required")
        .isLength({min:5})
        .withMessage("Content must be greater than 5 characters"),
        body("article")
        .exists()
        .withMessage("Article Id is required")
    ];
}

const validateTagBody=()=>{
    return [
        body("content")
        .exists()
        .withMessage("Content field is required")
        .isLength({min:5})
        .withMessage("Content must be greater than 5 characters"),
        body("name")
        .exists()
        .withMessage("name is required")
    ];
}


module.exports={
    validateArticleBody:validateArticleBody,
    validateCommentBody:validateCommentBody,
    validateLoginBody:validateLoginBody,
    validateRegistrationBody:validateRegistrationBody,
    validateTagBody:validateTagBody
}