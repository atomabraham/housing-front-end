import { useEffect, useState } from "react";
import "../../../Styles/PostProperty/FormPostProperty.css"
import { Row } from "react-bootstrap"
import { Form } from "react-bootstrap"
import axios from "axios";

function DetailsPost() {
    // recuperation des options
    const [options, setOptions] = useState([])
    const fetchOptions = async () => {
        await axios.get(`http://localhost:8000/api/options`).then(({ data }) => {
        setOptions(data);
        });
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    // gestion du select
    const tableOptions= []

    options.map ((option) => (
        tableOptions.push({value: `${option.name}`, label: `${option.name}`,})
    ))
    // console.log(tableOptions)

    const [selectedItems, setSelectedItems] = useState([]);

    const [availableTableOptions, setAvailableTableOptions] = useState(tableOptions);

    const handleSelect = (event) => {
      const selectedOption = event.target.value;

      // Vérifier si l'option sélectionnée existe déjà dans la liste des éléments sélectionnés
      if (!selectedItems.includes(selectedOption)) {
        setSelectedItems([...selectedItems, selectedOption]);

        // Retirer l'option sélectionnée des options disponibles
        const updatedTableOptions = availableTableOptions.filter(tableOptions => tableOptions.value !== selectedOption);
        setAvailableTableOptions(updatedTableOptions);

    }
    };

    const handleRemoveItem = (item) => {
        const updatedItems = selectedItems.filter(selectedItem => selectedItem !== item);
        setSelectedItems(updatedItems);
    }
    console.log(selectedItems)
    function getSelectedItems(){
        return selectedItems
    }

    return(
        <>
            <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                <p className="basicInformation" id="basicInformation">Détails de la propriétés</p>
            </Row>
            <Form.Group className="mb-3"  >
                <Form.Label className="labelBlockPost" id="labelDescription">Description</Form.Label>
                <textarea name="inputFormPostDescription" type="text" className="inputFormPost inputFormPostDescription" id="inputFormPostDescription" placeholder="Donnez une brève description de votre produit" />
            </Form.Group>
            <label for="supplement" className="labelBlockPost"><b>Agréments</b></label>
            <ul id="selectedItems" className="selected-items">
                {selectedItems.map((item, index) => (
                    <li className="optionSelectCreateProp" onClick={() => handleRemoveItem(item)} key={index}>{item}</li>
                ))}
            </ul>
            <Form.Select onChange={handleSelect} type="select" className="supplement" id="supplement" aria-label="" >

                <option disabled selected>Selectionnez tous les suplément que contient votre propriété</option>
                {
                    tableOptions.map ((option) => (
                        <option value={option.value} className="optionFormPost">{option.value}</option>
                    ))    
                }
            </Form.Select>
        </>
    )
}

export default DetailsPost