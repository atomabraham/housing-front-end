import "../../Styles/PostProperty/PostProperty.css"
import Navbar from "../ElementsPages/Banners/Navbar"
import Line from "../ElementsPages/Banners/Line"
import FormPostProperty from "../ElementsPages/PostProperty/FormPostProperty"

function PostProperty() {

    const addProperty = async (e) => {
        // e.preventDefault();
        // const {propertyName, description} = e.target.elements;
        // const image = e.target.files[0];
    }


    return(
        <>
            <Navbar/>
            <FormPostProperty/>
        </>
    )
}

export default PostProperty