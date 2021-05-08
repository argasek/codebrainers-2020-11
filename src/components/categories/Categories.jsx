import {Card, CardBody, ListGroup, Table} from "reactstrap";
import React from "react";
import InProgress from "components/shared/InProgress";
import axios from 'axios';
import CategoryItem from "../categories/CategoryItem";

const CATEGORIES_FETCH_DELAY = 500;

class Categories extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inProgress: false,
      successCategories: undefined,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories()
      .finally(() => {
        this.setState({ inProgress: false });
      })
  }

  fetchCategories() {

    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({ inProgress: true });
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => ({ name: item.name, id: item.id, url: item.url }));
          const successCategories = true;
          this.setState({ categories, successCategories });
          resolve();
        })
        .catch((error) => {
          this.setState({ successCategories: false });
          reject();
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }

  render() {
    const {categories, successCategories, inProgress} = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={inProgress}/>
          {
            successCategories === false &&
            <p>Unable to fetch categories.</p>
          }
          {
            successCategories && (
              <>
              <Table>
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Path</th>
                </tr>
                </thead>
                <tbody>
                {
                  categories.map((category, index, arr) => (
                          <CategoryItem category={category} key={index} index={index}/>)
                  )
                }
                </tbody>
              </Table>
              </>
          )}
        </CardBody>
      </Card>
    );
  }
}


export default Categories;