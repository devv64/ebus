import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const driverAddress = async () => {
    const query = gql`
    query driAdr{
        driver{
            address
        }
    }`;

    const result = await request(graphqlAPI, query);
    if(result){
        console.log(result);
    }
    console.log('dsaiod')
    return result.driver.address;
};

export const studentAddresses = async () => {
    const query = gql`
      query stuAdr{
          student(where: (opt:true)){
              name
              address
          }
      }`;
  
    console.log(query);
  
    try {
      const result = await request(graphqlAPI, query);
      console.log(result.student.address);
      return result.student.address;
    } catch (error) {
      console.error(error);
    }
  };
  
  