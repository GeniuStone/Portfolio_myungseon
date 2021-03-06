import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
  name : String,
  callnumber : String,
  email : String
});


// password를 파라미터로 받는 함수를 스키마의 인스턴스 메서드로 설정
// 인스턴스 메서드는 인스턴스를 생성한 후에 사용할 수 있는 메서드로 개별적으로 제공되는 메서드
UserSchema.methods.setPassword = async function (password) {
    // 비밀번호를 해싱
    const hash = await bcrypt.hash(password, 10);
    // 해싱된 비밀번호를 현재 모델의 비밀번호에 업데이트
    this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
};

// 스태틱 메서드는 인스턴스 생성할 필요 없이 바로 접근이 가능한 메서드
UserSchema.statics.findByUsername = function (username) {
    return this.findOne({ username });
};

UserSchema.statics.findByUseremail = function (email) {
  return this.findOne({ email });
};

// 해싱된 비밀번호는 삭제하고 반환해주는 함수
UserSchema.methods.serialize = function () {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
};

// 토큰 만들어 주는 함수
UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
      // 첫번째 파라미터엔 토큰 안에 집어넣고 싶은 데이터를 넣습니다
      // 여기서 _id는 게시글의 id 
      {
        _id: this.id,
        username: this.username,
      },
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET, 
      {
        expiresIn: '7d', 
      },
    );
    return token;
  };

const User = mongoose.model('User', UserSchema);

export default User;
