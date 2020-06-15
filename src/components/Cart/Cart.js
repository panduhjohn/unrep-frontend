import React, { Component } from 'react';

import { Context } from '../Context/Context';
import ButtonGroup from '../shared/ButtonGroup';

import './Cart.css';

class Cart extends Component {
    static contextType = Context;

    render() {
        let total = this.context.cart.reduce((item, itemb) => {
            console.log('item', Number(item));
            console.log('itemB', Number(itemb.price))

            return Math.round(item + Number(itemb.price));
        }, 0);

        console.log('total', total);

        return (
            <div className='container'>
                <h1>
                    C<span>ar</span>t
                </h1>
                <table id='cart' className='table table-hover table-condensed'>
                    <thead>
                        <tr>
                            <th style={{ width: '50%', color: '#15ff00' }}>
                                Product
                            </th>
                            <th style={{ width: '10%', color: '#15ff00' }}>
                                Price
                            </th>
                            <th style={{ width: '8%', color: '#15ff00' }}>
                                Quantity
                            </th>
                            <th
                                style={{ width: '22%', color: '#15ff00' }}
                                className='text-center'
                            >
                                Subtotal
                            </th>
                            <th style={{ width: '10%', color: '#15ff00' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-th='Product'>
                                <div className='row'>
                                    {this.context.cart.map(
                                        ({ name, price, image }) => {
                                            return (
                                                <div key={name}>
                                                    <div className='col-sm-2 hidden-xs'>
                                                        <img
                                                            src={image}
                                                            alt='...'
                                                            className='img-responsive'
                                                        />
                                                    </div>
                                                    <div className='col-sm-10'>
                                                        <h4
                                                            className='nomargin'
                                                            style={{
                                                                color:
                                                                    '#15ff00',
                                                            }}
                                                        >
                                                            {name}
                                                        </h4>
                                                    </div>
                                                    <td
                                                        data-th='Price'
                                                        style={{
                                                            color: '#15ff00',
                                                        }}
                                                        key={name}
                                                    >
                                                        $ {price}
                                                    </td>
                                                    <td data-th='Quantity'>
                                                        <input
                                                            type='number'
                                                            className='form-control text-center'
                                                            value='1'
                                                            readOnly
                                                        />
                                                    </td>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </td>

                            <td
                                data-th='Subtotal'
                                className='text-center'
                                style={{ color: '#15ff00' }}
                            >
                                $ {total}
                            </td>
                            <td className='actions' data-th=''>
                                <button className='btn btn-info btn-sm'>
                                    <i className='fa fa-refresh'></i>
                                </button>
                                <button className='btn btn-danger btn-sm'>
                                    <i className='fa fa-trash-o'></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className='visible-xs'>
                            <td
                                className='text-center'
                                style={{ color: '#15ff00' }}
                            >
                                <strong>${total}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ButtonGroup
                                    // key={key}
                                    buttonStyle='form-button1'
                                    title='Go Back'
                                    disabled={false}
                                />
                            </td>
                            <td colSpan='2' className='hidden-xs'></td>
                            <td
                                className='hidden-xs text-center'
                                style={{ color: 'red' }}
                            >
                                <strong>Total ${total}</strong>
                            </td>
                            <td>
                                <ButtonGroup
                                    // key={key}
                                    buttonStyle='form-button'
                                    title='Checkout'
                                    disabled={false}
                                />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default Cart;
