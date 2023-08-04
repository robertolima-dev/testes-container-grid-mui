import { Box, Button, Container, Grid } from '@mui/material'
import { Fragment, useState } from 'react'

export default function Home() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <Fragment>
            {showMenu ?
                <Box sx={{ width: '84px', background: '#000', minHeight: '100vh', position: 'fixed' }}></Box>
                : null
            }

            <Box sx={{ marginLeft: showMenu ? '84px' : '0' }}>
                <Container sx={{ height: '800px', background: '#CCC' }}>
                    container
                    <Box sx={{ marginTop: '24px' }}>
                        <Button onClick={() => setShowMenu(!showMenu)} variant='contained'>{showMenu ? 'Esconder menu' : 'Mostrar menu'}</Button>
                    </Box>
                </Container>

                <Box sx={{ margin: '50px 0' }}></Box>

                <Container sx={{ height: '100%', background: '#CCC' }}>
                    <Box sx={{ textAlign: 'center', padding: '15px' }}>
                        Container com grid de 12 estatico
                    </Box>
                    <Grid container spacing={1}>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 1
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 2
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 3
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 4
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 5
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 6
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 7
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 8
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 9
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 10
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 11
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1} >
                            <Box sx={{ border: '1px solid blue', height: '400px' }}>
                                Grid 12
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ margin: '50px 0' }}></Box>

                <Container sx={{ height: '100%', background: '#CCC' }}>
                    <Box sx={{ textAlign: 'center', padding: '15px' }}>
                        Container com grid de 12 dinamico (LG 12 / MD 2 / SM 3 / XS 4)
                    </Box>
                    <Grid container spacing={1}>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 1
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 2
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 3
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 4
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 5
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 6
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 7
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 8
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 9
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 10
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 11
                            </Box>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3} xs={4}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 12
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ margin: '50px 0' }}></Box>

                <Container sx={{ height: '100%', background: '#CCC' }}>
                    <Box sx={{ textAlign: 'center', padding: '15px' }}>
                        Container com grid de 12 dinamico (LG 3 / MD 4 / SM 6 / XS 12)
                    </Box>
                    <Grid container spacing={1}>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 1
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 2
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 3
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 4
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 5
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 6
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 7
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 8
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 9
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 10
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 11
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ border: '1px solid blue', height: '250px' }}>
                                Grid 12
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ margin: '50px 0' }}></Box>
            </Box>
        </Fragment>
    )
}
