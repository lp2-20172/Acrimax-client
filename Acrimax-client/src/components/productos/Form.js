import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField';

import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import { getList as getCategoriaList } from '../../actions/categoria-action'
import { save, getById, update } from '../../actions/producto-action'
import { getList as getUnidadMedList } from '../../actions/unidadMed-action'
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
            nombre: props.data ? props.data.nombre : '',
            codigo: props.data ? props.data.codigo : '',
            precio_unidad: props.data ? props.data.precio_unidad : '',
            unidad_med: props.data ? props.data.unidad_med : '',
            categoria: props.data ? props.data.categoria : ''
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
    //componentDidMount = () => {
       


    componentWillMount = () => {
        this.props.getCategoriaList("")
        this.props.getUnidadMedList("")
        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
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
                    nombre: data.nombre,
                    codigo: data.codigo,
                    precio_unidad: data.precio_unidad,
                    unidad_med: data.unidad_med,
                    categoria: data.categoria
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
        //this.props.history.push('/productos/list');
        event.preventDefault();
    }

    render() {
        //3
        let { categoria_list, unidadMed_list } = this.props
        //const { data } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="Lista de productos"
                    subheader="acrimax"
                />
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                       
                        <br />
                        <label>
                            Codigo:
                            <input type="text" name="codigo" value={this.state.codigo} onChange={this.handleChange} />
                        </label>

                        <label>
                            Nombre:

                            <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
                        </label>

                        <label>
                              precio_unidad:
                            <input type="text" name="precio_unidad" value={this.state.precio_unidad} onChange={this.handleChange} />
                        </label>

                         
                         
                         <form >
                        <InputLabel >Categoria :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="categoria"
                            value={this.state.categoria}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una categoria.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "categoria"
                                },
                            }}

                        >
                            {categoria_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nombre}
                                </option>
                            )}
                        </TextField>





                    </form>
                    <form >
                        <InputLabel >Unidad y Medida :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="unidad_med"
                            value={this.state.unidad_med}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una categoria.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "unidad_med"
                                },
                            }}

                        >
                        {unidadMed_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nombre}
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
    categoria_list: PropTypes.array,
    unidadMed_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.producto.list.find(item => item.id + '' === props.match.params.id + ''),
            categoria_list: state.categoria.list,
            unidadMed_list: state.unidadMed.list,
        }
    }
    return {
        data: null,
        categoria_list: state.categoria.list,
        unidadMed_list: state.unidadMed.list,
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
    getCategoriaList,
    getUnidadMedList,

})(Form)