import React, {Component} from "react";

class ListMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: this.props.url
        }
    }

    render() {
        return(
            <div>
                <img src={this.state.datalist} alt="Product Makanan" width="150"></img>
            </div>
        );
    }
}

export default ListMakanan;