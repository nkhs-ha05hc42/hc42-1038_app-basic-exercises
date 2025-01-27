const postSample1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
   }

   const getSample1 = (req, res) => {
    res.send(
    JSON.stringify({
    id: req.query.id,
    message: "メッセージを取得します",
    }),
    )
   }

   export const sample1Controller = {
    postSample1,
    getSample1,
   }