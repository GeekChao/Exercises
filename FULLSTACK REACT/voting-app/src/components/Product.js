import React, {Component} from 'react';
import '../style/Product.css'

class Product extends Component{

    render(){
        let {product, handleUpVote} = this.props;
        return(
            <div className='product'>
                <div className="product_icon">
                    <img src={product.img} alt='icon'/>
                </div>
                <div className='product_info'>
                    <div className='product_info_vote'>
                        <span><img src='http://localhost:3000/images/caret.png' alt='triangle' onClick={() => handleUpVote(product.id)}/>{'  ' + product.votes}</span>                    
                    </div>
                    <article className='product_info_article'>
                        <h5><a href='#'>{product.article.title}</a></h5>
                        <p>{product.article.excerpt}</p>
                    </article>
                    <div className='product_info_author'>
                        <span>Submitted by:<img src={product.author} alt='avatar'/></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;