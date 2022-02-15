import { NextApiResponse } from "next";

function A(_: any, res: NextApiResponse) {
    console.log(res);
    fetch('https://people.googleapis.com/v1/people/me?personFields=names,photos&key=' + process.env.GOOGLE_API_KEY!).then((r) => {
        return r.json();
    }).then(d => {
        res.status(200).json(d);
    });
};

export default A;
