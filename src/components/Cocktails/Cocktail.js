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
        width: 450,
        maxHeight: '90%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
    },
//     paper: {
//         position: 'absolute',
//         width: 500,
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//         overflow: 'scroll',
//         height: '100%',
//         maxHeight: 500,
//         display: 'block'
//     },
//     header: {
//         padding: '12px 0',
//         borderBottom: '1px solid darkgrey'
//     },
//     content: {
//         padding: "12px 0",
//         overflow: 'scroll'
//     }
}));

const Cocktail = ({ data }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { setRecipesId, cocktail, setCocktail } = useContext(ModalContext)

    const showIngredients = (data) => {
        const ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (data[`strIngredient${i}`]) {
                ingredients.push(
                    <li><strong>{data[`strIngredient${i}`]}:</strong>  {data[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    }

    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h5 className="card-header text">{data.strDrink}</h5>
                <img className="card-img-top" src={data.strDrinkThumb} alt={`${data.strDrink} image`} />
                <div className='card-body'>
                    <button
                        onClick={e => {
                            e.preventDefault()
                            setRecipesId(data.idDrink)
                            handleOpen();
                        }}
                        className='button btn-block btn-primary'>Ver Receta
                    </button>
                    {cocktail ?
                        <Modal
                            open={open}
                            onClose={() => {
                                setRecipesId(null);
                                setCocktail({})
                                handleClose()
                            }}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <h2>{cocktail.strDrink}</h2>
                                <h3 className='mt-4'>Instrucciones</h3>
                                <p>
                                    {cocktail.strInstructions}
                                </p>
                                <img className='img-fluid my-4' src={cocktail.strDrinkThumb} />
                                <h3>Ingredientes y cantidades</h3>
                                <ul>
                                    {showIngredients(cocktail)}
                                </ul>
                            </div>
                        </Modal>
                        :
                        null

                    }
                </div>
            </div>
        </div>
    );
};

export default Cocktail;