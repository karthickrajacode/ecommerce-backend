import jwt, { decode } from 'jsonwebtoken';
import Status from 'http-status';

export const authoriseUser = (req, res, next) => {
    // console.log('hhhhh', req.headers.Authorization);
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(Status.FORBIDDEN).send({ message: "Authorization is required" })
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(Status.FORBIDDEN).send({ message: "Authorization is required" })
    }
    if (token) {
        jwt.verify(token, process.env.SEC_KEY, (err) => {
            if (err) {
                return res
                    .status(Status.FORBIDDEN)
                    .send({ message: "Token is expired" });
            }
            return next()
        });

    }
};
export const decodeToken = (req) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const resp = jwt.decode(token, process.env.SEC_KEY)
    return resp;
}

