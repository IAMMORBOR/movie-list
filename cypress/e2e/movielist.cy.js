
const baseurl="http://localhost:3000"
const movieid="848538"

// beforeEach(() => {
//   cy.visit(`${baseurl}`);
// });

describe('check if users can successfully search for a movie ', () => {
  // test header and search 
  it('check if the header text is visible and users can successfully search ', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Welcome !")
    cy.contains("Discover and explore recent and trending movies & TV shows")

    // check if input filled and button is visible and check if users can successfully submit
    cy.get('[data-testid=search-input]').should('be.visible')
    cy.get('[data-testid=search-btn]').should('be.visible');
    const searchString = 'Dune';
    cy.get('[data-testid=search-input]').type(searchString);
    cy.get('[data-testid=search-input]').should('have.value', searchString);
    cy.get('[data-testid=search-btn]').click();
  })
})

describe('check if the popular, series  and Trending is available on the screen  ', () => {
  it('check if the popular, series  and Trending is available on the screen', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("What's Trending")
    cy.contains("Popular Movies")
    cy.contains("Popular Series")

    // check that you can click on view all to see all movies
    cy.contains("View all")
    cy.get('[data-testid=trending-view]').click();
    cy.visit(`${baseurl}/trending`)
  })
})

// check that the card component is visible on the scren and has neccessay details. Also test that details can be clicked and users can be redirected 
describe('test that card component is available and can be clicked   ', () => {
  it('test that card component is available and can be clicked ', () => {
    cy.visit(`${baseurl}`);
    cy.get('[data-testid=movie-card]').should('be.visible');
    cy.get('[data-testid=title]')
    .should('be.visible')
    .should("not.be.empty");
    cy.get('[data-testid=date]')
    .should('be.visible')
    .should("not.be.empty");
    cy.wait(1000)
    cy.wait(5000).then(() => {
      cy.get('[data-testid=clickable-details]').as('clickableDetails');
      cy.wait(1000)
      cy.get('@clickableDetails').click({ multiple: true });
      cy.wait(1000)
    });
  
  })
})

 // check endpoints is returning expected data
describe('test the movie endpoint    ', () => {
  it('test the movie endpoint  ', () => {
    cy.visit(`${baseurl}/movie/${movieid}`)
    cy.request('GET', `https://api.themoviedb.org/3/movie/${movieid}?api_key=ae8775e605fbf2b4a5eda1649df07930`)
      .then((response) => {
        expect(response.status).to.equal(200);
        const movieDetails = response.body;
        cy.wrap(movieDetails).as('movies');
      });

    // Check if movie component has the necessary details.
    cy.get('@movies').then((moviedetail) => {
      expect(moviedetail?.poster_path).to.exist;
      expect(moviedetail?.tagline).to.exist;  
      expect(moviedetail?.original_title).to.exist;
    })
  })
  
})


