//  const express = require("express")
//  const mongoose = require('mongoose')
//  const cors = require("cors")
//  const bcrypt = require('bcrypt')
//  const jwt = require('jsonwebtoken')
//  const cookieParser = require('cookie-parser')
// const UserModel = require('./models/User')

//  const app = express()
//  app.use(express.json())
//  app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true
//  }))
//  app.use(cookieParser())

// mongoose.connect('mongodb://localhost:27017/signup2');

// const varifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if(!token){
//         return res.json("Token is missing")
//     }else{
//         jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//             if(err){
//                 return res.json("Error with token")
//             }else{
//                 if(decoded.role==="admin"){
//                     next()
//                 }else{
//                     return res.json("not admin")
//                 }
//             }
//         })
//     }
// }

// app.get('/dashboard',varifyUser ,(req, res) => {
//     UserModel.find()
//     .then(users=> res.json(users))
//     .catch(err => res.json(err))
// })

// app.post('/register', (req,res) => {
//     const {name, email, phone, password} = req.body;
//     bcrypt.hash(password, 10)
//     .then(hash => {
//         UserModel.create({name, email, phone, password: hash})
//         .then(user =>res.json("Success"))
//         .catch(err => res.json(err))
//     }).catch(err => res.json(err))
// })

// app.post('/login' , (req, res) => {
//     const {email, password} = req.body;
//     UserModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             bcrypt.compare(password, user.password, (err, response) => {
//                 if(response){
//                     const token = jwt.sign({email: user.email, role: user.role}, 
//                             "jwt-secret-key")
//                         res.cookie('token', token)
//                         return res.json({Status: "Success", role: user.role})
//                 }else{
//                     return res.json("The password is incorrect")
//                 }
//             })
//         }
//         else{
//             return res.json("No record existed")
//         }
//     })
// })



//  app.listen(3001, () => {
//     console.log("Server is Running")
//  })

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const UserModel = require('./models/User');
// const OrderModel = require('./models/Order');


// const router = express.Router();// Import the Order model

// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true
// }));
// app.use(cookieParser());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/signup2');

// // Middleware to verify user
// const verifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.json("Token is missing");
//     } else {
//         jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//             if (err) {
//                 return res.json("Error with token");
//             } else {
//                 if (decoded.role === "admin") {
//                     next();
//                 } else {
//                     return res.json("Not admin");
//                 }
//             }
//         });
//     }
// };

// // User routes
// app.get('/admin', verifyUser, (req, res) => {
//     UserModel.find()
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// });

// app.post('/register', (req, res) => {
//     const { name, email, phone, password } = req.body;
//     bcrypt.hash(password, 10)
//         .then(hash => {
//             UserModel.create({ name, email, phone, password: hash })
//                 .then(user => res.json("Success"))
//                 .catch(err => res.json(err));
//         }).catch(err => res.json(err));
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     UserModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 bcrypt.compare(password, user.password, (err, response) => {
//                     if (response) {
//                         const token = jwt.sign({ email: user.email, role: user.role }, "jwt-secret-key");
//                         res.cookie('token', token);
//                         return res.json({ Status: "Success", role: user.role });
//                     } else {
//                         return res.json("The password is incorrect");
//                     }
//                 });
//             } else {
//                 return res.json("No record existed");
//             }
//         });
// });

// // Order routes
// app.post('/api/orders', (req, res) => {
//     const { product, address, phone, altPhone, quantity, flavor, message, date, totalAmount } = req.body;
//     const order = new OrderModel({
//         product,
//         address,
//         phone,
//         altPhone,
//         quantity,
//         flavor,
//         message,
//         date,
//         totalAmount
//     });

//     order.save()
//         .then(() => res.status(201).json(order))
//         .catch(err => res.status(400).json(err));
// });

// app.get('/api/orders', (req, res) => {
//     OrderModel.find({})
//         .then(orders => res.json(orders))
//         .catch(err => res.status(500).json(err));
        
// });


// // Start the server
// app.listen(3001, () => {
//     console.log("Server is Running on port 3001");
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const UserModel = require('./models/User');
const OrderModel = require('./models/Order');
const CustomizedCakeModel = require('./models/CustomizedCake'); // Import your CustomizedCake model


const app = express();

const fs = require('fs');


// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/signup2');

// Set up multer for handling file uploads


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


// Middleware to verify user
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("Token is missing");
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json("Error with token");
            } else {
                if (decoded.role === "admin") {
                    next();
                } else {
                    return res.json("Not admin");
                }
            }
        });
    }
};

// User routes
app.get('/admin', verifyUser, (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.post('/register', (req, res) => {
    const { name, email, phone, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ name, email, phone, password: hash })
                .then(user => res.json("Success"))
                .catch(err => res.json(err));
        }).catch(err => res.json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, role: user.role }, "jwt-secret-key");
                        res.cookie('token', token);
                        return res.json({ Status: "Success", role: user.role });
                    } else {
                        return res.json("The password is incorrect");
                    }
                });
            } else {
                return res.json("No record existed");
            }
        });
});

// Order routes
app.post('/api/orders', (req, res) => {
    const { product, address, phone, altPhone, quantity, flavor, message, date, paymentMethod, totalAmount } = req.body;
    const order = new OrderModel({
        product,
        address,
        phone,
        altPhone,
        quantity,
        flavor,
        message,
        date,
        paymentMethod,
        totalAmount
    });

    order.save()
        .then(() => res.status(201).json(order))
        .catch(err => res.status(400).json(err));
});


app.get('/api/orders', (req, res) => {
    OrderModel.find({})
        .then(orders => res.json(orders))
        .catch(err => res.status(500).json(err));
});

// Route to handle customized cake orders
app.post('/api/customized-cakes', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const { name, email, phone, cakeType, size, quantity, tiers, message, date } = req.body;
        const image = req.file.filename;

        const customizedCake = new CustomizedCakeModel({
            name,
            email,
            phone,
            cakeType,
            size,
            quantity,
            tiers,
            message,
            date,
            image
        });

        customizedCake.save()
            .then(() => res.status(201).json(customizedCake))
            .catch(err => {
                console.error('Error saving customized cake:', err);
                res.status(400).json(err);
            });
    } catch (err) {
        console.error('Error in /api/customized-cakes route:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/customized-cakes', (req, res) => {
    CustomizedCakeModel.find({})
        .then(customizedCakes => res.json(customizedCakes))
        .catch(err => res.status(500).json(err));
});






// Start the server
app.listen(3001, () => {
    console.log("Server is Running on port 3001");
});










// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const UserModel = require('./models/User');
// const OrderModel = require('./models/Order');
// const CustomizedCakeModel = require('./models/CustomizedCake'); // Customized Cake model
// const ReviewModel = require('./models/ReviewModel'); // Review Model

// const app = express();

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }

// app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true
// }));
// app.use(cookieParser());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/signup2', { useNewUrlParser: true, useUnifiedTopology: true });

// // Set up multer for handling file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// // Middleware to verify user
// const verifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.json("Token is missing");
//     } else {
//         jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//             if (err) {
//                 return res.json("Error with token");
//             } else {
//                 if (decoded.role === "admin") {
//                     next();
//                 } else {
//                     return res.json("Not admin");
//                 }
//             }
//         });
//     }
// };

// // User routes
// app.get('/admin', verifyUser, (req, res) => {
//     UserModel.find()
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// });

// app.post('/register', (req, res) => {
//     const { name, email, phone, password } = req.body;
//     bcrypt.hash(password, 10)
//         .then(hash => {
//             UserModel.create({ name, email, phone, password: hash })
//                 .then(user => res.json("Success"))
//                 .catch(err => res.json(err));
//         }).catch(err => res.json(err));
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     UserModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 bcrypt.compare(password, user.password, (err, response) => {
//                     if (response) {
//                         const token = jwt.sign({ email: user.email, role: user.role }, "jwt-secret-key");
//                         res.cookie('token', token);
//                         return res.json({ Status: "Success", role: user.role });
//                     } else {
//                         return res.json("The password is incorrect");
//                     }
//                 });
//             } else {
//                 return res.json("No record existed");
//             }
//         });
// });

// // Order routes
// app.post('/api/orders', (req, res) => {
//     const { product, address, phone, altPhone, quantity, flavor, message, date, paymentMethod, totalAmount } = req.body;
//     const order = new OrderModel({
//         product,
//         address,
//         phone,
//         altPhone,
//         quantity,
//         flavor,
//         message,
//         date,
//         paymentMethod,
//         totalAmount
//     });

//     order.save()
//         .then(() => res.status(201).json(order))
//         .catch(err => res.status(400).json(err));
// });

// app.get('/api/orders', (req, res) => {
//     OrderModel.find({})
//         .then(orders => res.json(orders))
//         .catch(err => res.status(500).json(err));
// });

// // Customized Cake Routes
// app.post('/api/customized-cakes', upload.single('image'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//     }

//     try {
//         const { name, email, phone, cakeType, size, quantity, tiers, message, date } = req.body;
//         const image = req.file.filename;

//         const customizedCake = new CustomizedCakeModel({
//             name,
//             email,
//             phone,
//             cakeType,
//             size,
//             quantity,
//             tiers,
//             message,
//             date,
//             image
//         });

//         customizedCake.save()
//             .then(() => res.status(201).json(customizedCake))
//             .catch(err => res.status(400).json(err));
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.get('/api/customized-cakes', (req, res) => {
//     CustomizedCakeModel.find({})
//         .then(customizedCakes => res.json(customizedCakes))
//         .catch(err => res.status(500).json(err));
// });

// // Review routes
// app.post('/api/reviews', (req, res) => {
//     const { name, rating, reviewText } = req.body;
    
//     const review = new ReviewModel({
//         name,
//         rating,
//         reviewText
//     });

//     review.save()
//         .then(() => res.status(201).json(review))
//         .catch(err => res.status(400).json(err));
// });

// app.get('/api/reviews', (req, res) => {
//     ReviewModel.find({})
//         .then(reviews => res.json(reviews))
//         .catch(err => res.status(500).json(err));
// });

// // Serve static files from the "uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Start the server
// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });
