import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { getList, del } from '../../actions/envio-action'
import { connect } from 'react-redux'

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {
    Link
} from 'react-router-dom'


class List extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    handleClick = () => {
        this.props.history.push('/catalogo/envio/new');
    }

    render() {
        let { list, del } = this.props
        if (list) {
            
        } else{
            list =[]

        }

        return (

            <Card>
                <CardHeader
                    avatar={
                        <Avatar src="data:image/jpeg;base64,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"  >

                            
                          </Avatar>
                    }
                    title="Lista de envio"
                    subheader="Acrimax"
                />

                <CardContent>
                    <Typography component="p">
                        q={this.props.q}
                    </Typography>

                    <TextField
                        id="search"
                        label="Search"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />

                    <Button fab color="primary" aria-label="add" onClick={this.handleClick}>
                        <AddIcon />
                    </Button>

                    <Paper style={{
                        overflowX: 'auto',
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >codigo_articulo</TableCell>
                                    <TableCell >fecha_envio</TableCell>
                                    <TableCell >numero_unidades</TableCell>
                                    <TableCell >Edit</TableCell>
                                    <TableCell >Delete</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {list.map((d, index) =>
                                    <TableRow key={index}>
                                        <TableCell numeric>{index + 1}</TableCell>
                                        <TableCell >{d.codigo_articulo}</TableCell>
                                        <TableCell >{d.fecha_envio}</TableCell>
                                        <TableCell >{d.numero_unidades}</TableCell>
                                        <TableCell >
                                            <Link to={`/catalogo/envio/edit/${d.id}`} className="ui basic button green">Edit</Link>
                                        </TableCell>
                                        <TableCell >
                                            <Button onClick={() => del(d.id, this.props.history)} >Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>

            </Card>
        );
    }
}
List.propTypes = {
    list: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        list: state.envio.list
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        getList: (q) => { dispatch(getList(q)) },
        del: (id, h) => { dispatch(del(id, h)) }
    }
}
*/
export default connect(mapStateToProps, {
    getList,
    del
})(List)