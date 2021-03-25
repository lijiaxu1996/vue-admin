// 对token字段进行解析
import jwt from 'jsonwebtoken'
// const  PRIVATE_KEY  = 'egg-blog-api-learn';

const token = window.localStorage.getItem('token');
const decode = jwt.decode(token)

export default decode
