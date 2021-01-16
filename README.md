express
nodemon
morgan
template engines(handerbars, pug , fs)
node-sass
format code:
+prettier: prettier github (https://prettier.io/docs/en/cli.html)
+lint-staged
+husky : husky github
Modal:
-mongodb
-install mongoose:https://github.com/Automattic/mongoose
-connect to db : await bat buoc phai nam trong ham async va co try-catch de bat loi:https://github.com/Automattic/mongoose
-create model :https://github.com/Automattic/mongoose
-install Json viewer extension chrome
-CRUD: create-read-update-delete
-mongoose slug generator : tự động tạo slug
-method-override:http://expressjs.com/en/resources/middleware/method-override.html
vì html chỉ nhận 2 method post and get
=> nên muốn chỉnh sửa(PUT) phải dùng method-override để chuyển từ post sang put
-update db:https://mongoosejs.com/docs/models.html#updating
-data-whatever : để truyền id vào bootstrap: https://getbootstrap.com/docs/4.5/components/modal/

NOTEEEEE:
SOFT DELETE: xóa mềm quan trọng nè + Cần đối soát + Cần truy vết + Liên quan đến đơn hàng tiền tệ dữ liệu nhạy cảm
SOFT DELETE = - DELETE (soft):https://www.npmjs.com/package/mongoose-delete
        -RESTONE
        -FORCE DELETE
