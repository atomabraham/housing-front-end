import "../../Styles/PostProperty/PostProperty.css"
import FirstBanner from "../ElementsPages/Banners/FirstBanner"
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
            <FirstBanner/>
            <FormPostProperty/>
        </>
    )
}

export default PostProperty