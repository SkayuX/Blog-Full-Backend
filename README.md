## <center>Blog Posting Backend 👨‍🎓 </center>

>**API Routes**
>> **GET /api/get/:ObjID - Get Blog by ObjectID <br>**
>> **DELETE /api/delete/:ObjID - Delete Blog by ObjectID <br>**
>> **PATCH /api/edit/:ObjID - Edit Blog by ObjectID <br>**
>> **POST /api/create - Creates new Blog with provided Info <br>**

---

### POST /api/create Body Requirements:
1. Title - Type: String, required: true
2. ShortDescription - Type: String, required: true
3. Overview - Type: String, required: true
4. Author - Type: String, required: true
5. Footer - Type: String, required: true
6. Date - Type: Date, required: true

---

### Environment Requirements:
1. MONGO_STRING - Type: String, required: true
2. PORT - Type: Number, required: false

---

###### ***Skayu#0001***