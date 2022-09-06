import List from "./../Main/Card/List";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderHook } from "@testing-library/react-hooks";
//jest.spyOn(window, 'fetch')
import React, { useEffect, useState } from 'react'

const categories = [
  {
    id: 1,
    title: "Hotel",
    description: "10",
    url_image: "https://grupo7.s3.us-west-1.amazonaws.com/Herberger1/h1.jpg",
  },
  {
    id: 2,
    title: "Hostel",
    description: "10",
    url_image: "https://grupo7.s3.us-west-1.amazonaws.com/Herberger1/h1.jpg",
  },
  {
    id: 3,
    title: "Apartament",
    description: "10",
    url_image: "https://grupo7.s3.us-west-1.amazonaws.com/Apart1/a1.jpg",
  },
  {
    id: 4,
    title: "Bed and Breakfast",
    description: "10",
    url_image: "https://grupo7.s3.us-west-1.amazonaws.com/bb1/b1.jpg",
  },
];

describe("getCategories", () => {
  /*const [cat,setCategories]=useState(null)

  it("doesnt really fetch", async () => {
    fetch(
      "http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/category/findAll"
      
    )
      .then((response) => response.json())
      .then((result) => setCategories(result))
      .catch((error) => console.log("error", error));

      expect(cat).toEqual( categories)


  });*/
  
it('doesnt really fetch', async () => {

    const fakeData =  categories 
    const mockAd = jest.fn(global, 'fetch').mockImplementation(List()
    
       /* Promise.resolve({
        json: () => Promise.resolve(fakeUser)*/
    )
   expect(fetch).toHaveBeenCalledWith('http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/category/findAll', {
    method: 'GET',
    redirect: 'follow'
  })
    /*const res = await fetch('http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/category/findAll')
    const json = await res*/
     expect(mockAd).toBeCalledTimes(1);

     global.fetch.mockClear()
  })
  })

   

   // const res = await fetch('http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/category/findAll')
   //const json = await res//.JSON()
   // expect(json).toEqual( { data: fakeData })



    /*expect(fetch).toHaveBeenCalledWith('http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/category/findAll', {
        method: 'GET',
      });*/
  //  expect(idUsuario).toBe('4');
  // expect(spy).toHaveBeenCalled();
  // expect(isPlaying).toBe(fakeData)
  //const res = await fetch('http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/category/findAll')

  //global.fetch.mockClear()
  // })

  /* describe('getCategories', () => {
    beforeAll(() =>
      window.fetch.mockImplementation(() => ({
        then: () => cat,
      })),
    )
    script.getBooks().then(res => {
        expect(fetchmock.lastUrl()).to.equal('http://localhost:3000/books');
        expect(res).to.deep.equal(bookTestData);
        done();
      })
      .catch(err => {
        expect(err).to.equal(null, err);
        done()
      });
    it('makes a fetch call', () => {
        const component = render(
            <BrowserRouter>
                <List />
            </BrowserRouter>
        )
      expect(window.fetch).toHaveBeenCalledWith('http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/category/findAll')
    })
   
    it('returns data', async () => {
      const data = await component
      expect(data).toEqual(categories)
    })*/

