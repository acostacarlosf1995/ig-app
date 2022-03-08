import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

import "../styles/stylesheets.css";

// const posts = [
//   {
//     id: "0",
//     description: "beautiful landscape",
//     imageLink:
//       "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//       "3919321_1443393332_n.jpg",
//   },
//   {
//     id: "1",
//     description: "Aliens???",
//     imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
//   },
//   {
//     id: "2",
//     description: "On a vacation!",
//     imageLink:
//       "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
//   },
// ];

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
        },
        {
          id: "1",
          description: "Aliens???",
          imageLink:
            "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
        },
        {
          id: "2",
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
        },
      ],
      screen: 'photos'
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  removePhoto(postRemove) {
    console.log(`Se elimino la publicacion ${postRemove.description}`);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemove),
    }));
  }

  navigate() {
    this.setState({
      screen: 'addPhoto'
    })
  }

  // Para pedidos HTTP, Fetch, Ajax, etc

  //   componentDidMount() {
  //       const data = SimulateFetchFromDatabase()
  //       this.setState({
  //           posts: data
  //       })
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("re-render");
  //     console.log(prevState.posts);
  //     console.log(this.state);
  //   }

  render() {
    return (
      <Fragment>
        {
          this.state.screen === 'photos' && (
                <div>
                  <Title title={"Instagram"} />
                  <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                </div>
            )
        }
        {
          this.state.screen === 'addPhoto' && (
                <div>
                  <AddPhoto/>
                </div>
            )
        }
      </Fragment>
    );
  }
}

// function SimulateFetchFromDatabase() {
//   return [
//     {
//       id: "0",
//       description: "beautiful landscape",
//       imageLink:
//         "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg",
//     },
//     {
//       id: "1",
//       description: "Aliens???",
//       imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
//     },
//     {
//       id: "2",
//       description: "On a vacation!",
//       imageLink:
//         "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
//     },
//   ];
// }

export default Main;
