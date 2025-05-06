# MERN stack
## react + express + nodejs + mongodb
## mongodb
https://docs.google.com/document/d/18eWazFFjN2fiwwrVEMWX0XCg07PzAR34H9RnPeHZNTA/edit?usp=sharing

## Backend
```bash
npm init -y
```
auto fill questions (-y)

install express:
```bash
npm i express
```

install dotenv:
```bash
npm i dotenv
```

```javascript
require('dotenv').config()

app.listen(process.env.PORT, ()=>{
    console.log("listening on port 4000")
})
```

## mongoose
odm library, object-data-modelling. Read and write data documents, ensure a more strict data structure