import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { getList as getProductoList } from '../../actions/producto-action'
import { save, getById, update } from '../../actions/shoppingcart-action'
import { getList as getVentaList } from '../../actions/venta-action'
import { connect } from 'react-redux'
class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    codigo: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            producto_nombre: props.data ? props.data.producto_nombre : '',
            venta_nro_doc: props.data ? props.data.venta_nro_doc : '',
            cantidad: props.data ? props.data.cantidad : '',
            precio_uni: props.data ? props.data.precio_uni : '',
            producto: props.data ? props.data.producto : '',
            venta: props.data ? props.data.venta : ''
        }
    }
    /*
        componentWillReceiveProps = (nextProps) => { // Load Asynchronously
            const { data } = nextProps;
            console.log('componentWillReceiveProps data:' + JSON.stringify(data))
            this.setState({
                id: data.id,
                codigo: data.codigo,
                nombre: data.nombre
            })
        }
    */
    componentWillMount = () => {
        this.props.getProductoList("")
        this.props.getVentaList("")
        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
                })
            }).catch(e => {

            });
        }
        */
    }


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    producto_nombre: data.producto_nombre,
                    venta_nro_doc: data.venta_nro_doc,
                    cantidad: data.cantidad,
                    precio_uni: data.precio_uni,
                    producto: data.producto,
                    venta: data.venta
                });
            });
        }
    }

    handleChange = (event) => {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const { id } = this.props.match.params
        if (id) {
            //console.log('handleSubmit state:' + JSON.stringify(this.state))
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }

    render() {
        let { producto_list, venta_list } = this.props

        //const { data } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="User Form"
                    subheader="Users Form"
                />
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        
                        
                        <label>
                            producto_nombre:
                            <input type="text" name="producto_nombre" value={this.state.producto_nombre} onChange={this.handleChange} />
                        </label>   
                        <label>
                            venta_nro_doc:
                            <input type="text" name="venta_nro_doc" value={this.state.venta_nro_doc} onChange={this.handleChange} />
                        </label>
                            cantidad:
                            <input type="text" name="cantidad" value={this.state.cantidad} onChange={this.handleChange} />
                        <label>
                            precio_uni:
                            <input type="text" name="precio_uni" value={this.state.precio_uni} onChange={this.handleChange} />
                        </label>
                     
                    <form >
                        <InputLabel >Producto :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="producto"
                            value={this.state.producto}
                            onChange={this.handleChange}

                            helperText="...............Seleccione un producto.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "producto"
                                },
                            }}

                        >
                        {producto_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nombre}
                                </option>
                            )}
                        </TextField>

                    </form>
                    <form >
                        <InputLabel >Venta :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="venta"
                            value={this.state.venta}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una venta.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "venta"
                                },
                            }}

                       >
                        {venta_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.vendedor_username}
                                </option>
                            )}
                        </TextField>

                    </form>
                        <input type="submit" value="Submit" />
                    </form>
                </CardContent>
            </Card>
        )
    }
}

Form.propTypes = {
    data: PropTypes.object,
    producto_list: PropTypes.array,
    venta_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.producto.list.find(item => item.id + '' === props.match.params.id + ''),
            producto_list: state.producto.list,
            venta_list: state.venta.list,
        }
    }
    return {
        data: null,
        producto_list: state.producto.list,
        venta_list: state.venta.list,
    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        save: (d, h) => { dispatch(save(d, h)) },
        getList: (q) => { dispatch(getList(q)) },
        getById: (id) => { dispatch(getById(id)) },
        update: (d, h) => { dispatch(update(d, h)) },
    }
}
*/
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getProductoList,
    getVentaList,

})(Form)