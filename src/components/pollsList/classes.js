import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    root: {
        margin: 'auto',
        maxWidth: '90vw',
        width: 860,
        paddingBottom: 50,
        '& .paper': {
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: 8,
            // marginBottom: 8,
            padding: 24,
            pageBreakInside: 'avoid',
            wordWrap: 'break-word',
            WebkitTransition: 'background-color 200ms cubic-bezier(0.0,0.0,0.2,1)',
            '& .title': {
                fontSize: 25,
                justifyContent: 'space-between',
                marginBottom: 6,
                // Webkit-box-pack: justify;
            },
            '& .description': {
                fontSize: 16,
                color: '#2e2e2e',
            },
            '& .btn-group': {
                textAlign: 'right',
                marginBottom: -10,
                marginTop: 15,
            },
            '& .results': {
                marginTop: 12
            }
        },
        '& .paper.header': {
            boxSizing: 'border-box',
            borderTop: '4px solid #3f51b5cc',
            fontSize: 34,
            '& .description': {
                marginTop: 15,
                fontSize: 20,
                color: '#000',
                '& svg': {
                    margin: '2px 0 0 2px',
                    maxWidth: 17,
                }
            }
        }
    },
    createButton: {
        position: 'fixed',
        padding: '10px 15px',
        right: 25,
        bottom: 40,
        backgroundColor: '#dc004e',
        color: '#fff',
        borderRadius: 20,
        minHeight: 45,
        minWidth: 120,
        fontSize: 16,
        '&:hover': {
            transition: 'margin-left 2s ease',
            backgroundColor: '#dc004ecc',
        },

    }

}))

export default useClasses