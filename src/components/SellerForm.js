import React from 'react'
import { withRouter } from 'react-router-dom'

export function SellerForm({ formDetailsChange, sellerFormDetails, history }) {

    function getImageBase64(event) {

        let base64
        let file = event.target.files[0]
        let fileReader = new FileReader()
        fileReader.onload = loadFile
        function loadFile(readerEvent) {
            base64 = readerEvent.target.result
            formDetailsChange({ "itemImage": base64.split(',')[1] })
            return base64
        }
        fileReader.readAsDataURL(file)
    }

    function onChange(event) {
        if (event.target.name === "itemImage") {
            getImageBase64(event)
        } else {
            formDetailsChange({ [event.target.name]: event.target.value })
        }
    }

    function onSubmit(event) {
        event.preventDefault()
        history.push('/success')
        console.log(sellerFormDetails)
    }

    return (
        <div>
            <h2>Enter Item Details</h2>
            <form className="Form">
                <legend className="Legend">Title:</legend>
                <input
                    onBlur={() => { }}
                    name="itemTitle"
                    type="text"
                    placeholder="Enter Item Title"
                    onChange={onChange}
                    value={sellerFormDetails.itemTitle}
                />
                <legend className="Legend">Description:</legend>
                <input
                    onBlur={() => { }}
                    name="itemDescription"
                    type="text"
                    placeholder="Enter Item Description"
                    onChange={onChange}
                    value={sellerFormDetails.itemDescription}
                />

                <legend className="Legend">ItemOverview:</legend>
                <textarea
                    onBlur={() => { }}
                    name="itemOverview"
                    type="text"
                    placeholder="Enter Item itemOverview"
                    onChange={onChange}
                    value={sellerFormDetails.itemOverview}
                />

                <legend className="Legend">Image:</legend>
                <input
                    onBlur={() => { }}
                    name="itemImage"
                    type="file"
                    onChange={onChange}
                />

                <legend className="Legend">Cost:</legend>
                <input
                    onBlur={() => { }}
                    name="itemCost"
                    type="text"
                    placeholder="Enter Item cost"
                    onChange={onChange}
                    value={sellerFormDetails.itemCost}
                />

                <button onClick={onSubmit} className="SubmitPaymentButton">Submit Details</button>
            </form>
        </div>
    )
}

export default withRouter(SellerForm)