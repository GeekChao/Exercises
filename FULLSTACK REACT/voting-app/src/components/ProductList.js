import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component{
    state = {
        pList: []
    }
    
    componentDidMount(){
        this.setState({
            pList: this.props.pList.sort(((a, b) => b.votes - a.votes))
        });
    }

    handleUpVote = (id) => {
        let index = this.state.pList.findIndex(p => p.id === id);
        let product = this.state.pList[index];
        let newProduct = {...product, votes: ++product.votes};
        let newPList = [...this.state.pList.slice(0, index), newProduct, ...this.state.pList.slice(index + 1)];
        newPList.sort((a, b) => b.votes - a.votes);
        this.setState({
            pList: newPList
        });
    }

    render(){
        return(
            <div className="ProductList">
                {this.state.pList.map(p => <Product key={p.id} product={p} handleUpVote={this.handleUpVote} />)}
            </div>
        );
    }
}

export default ProductList;