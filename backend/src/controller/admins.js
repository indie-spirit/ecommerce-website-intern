import Admin from "../models/admin";

export const allAdmins = async (req, res) => {
    const admin = await Admin.find();
    if(admin){
        return res.status(200).send(admin)
    }
    return res.status(404).send({"message": "No Admins Found"});
}
