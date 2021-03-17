import React, { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Cocktail = ({ imageUrl, name, id }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { setRecipesId, cocktail } = useContext(ModalContext)


    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h5 className="card-header text">{name}</h5>
                <img className="card-img-top" src={imageUrl} alt={`${name} image`} />
                <div className='card-body'>
                    <button
                        onClick={e => {
                            e.preventDefault()
                            setRecipesId(id)
                            handleOpen();
                        }}
                        className='button btn-block btn-primary'>Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={()=>{
                            setRecipesId(null);
                            handleClose()
                        }}    
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>Desde Modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Cocktail;