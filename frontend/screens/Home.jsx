import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModel from '../components/SearchModel'

const Categories = [
  { id: 1, name: "Shirts" },
  { id: 2, name: "T-Shirt" },
  { id: 3, name: "Mans" },
  { id: 4, name: "Womans" },
  { id: 5, name: "Girls" },
  { id: 6, name: "Boys" },
  { id: 7, name: "Old" }
]

const products = [
  {
    _id: 1,
    name: "T-Shirt",
    price: 127,
    images: [
      {
        url: "https://dummyimage.com/300x300/000/fff",
      }
    ]
  },
  {
    _id: 2,
    name: "Jeans",
    price: 89.99,
    images: [
      {
        url: "https://dummyimage.com/300x300/333/eee",
      }
    ]
  },
  {
    _id: 3,
    name: "Running Shoes",
    price: 149.5,
    images: [
      {
        url: "https://dummyimage.com/300x300/666/ccc",
      }
    ]
  },
  {
    _id: 4,
    name: "Backpack",
    price: 75,
    images: [
      {
        url: "https://dummyimage.com/300x300/999/aaa",
      }
    ]
  },
  {
    _id: 5,
    name: "Smartphone",
    price: 699,
    images: [
      {
        url: "https://dummyimage.com/300x300/111/888",
      }
    ]
  },
  {
    _id: 6,
    name: "Watch",
    price: 299.99,
    images: [
      {
        url: "https://dummyimage.com/300x300/444/bbb",
      }
    ]
  },
  {
    _id: 7,
    name: "Laptop",
    price: 1199,
    images: [
      {
        url: "https://dummyimage.com/300x300/777/ddd",
      }
    ]
  },
  {
    _id: 8,
    name: "Sunglasses",
    price: 49.95,
    images: [
      {
        url: "https://dummyimage.com/300x300/ccc/222",
      }
    ]
  },
  {
    _id: 9,
    name: "Headphones",
    price: 149,
    images: [
      {
        url: "https://dummyimage.com/300x300/eee/555",
      }
    ]
  },
  {
    _id: 10,
    name: "Gaming Console",
    price: 399,
    images: [
      {
        url: "https://dummyimage.com/300x300/fff/999",
      }
    ]
  }
];



const Home = () => {

  const [category, setCategory] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSearch, setActiveSearch] = useState(false)

  const categoryButtonHandler = (e) => {
    setCategory(e)
  }

  console.log(activeSearch)

  return (
    <>

      {
        activeSearch && (
          <SearchModel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActiveSearch={setActiveSearch}
            products={products}
          />
        )
      }

      <View style={defaultStyle}>
        {/* Header */}
        <Header />


        {/* Heading */}
        <View style={{ paddingTop: 70, flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>


          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon icon={"magnify"} color={'gray'} style={{ backgroundColor: colors.color2, elevation: 12 }} />
            </TouchableOpacity>
          </View>
        </View>


        {/* Categories */}
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}>
            {
              Categories.map((item, index) => (
                <Button key={item.id} style={{ backgroundColor: category === item.id ? colors.color1 : colors.color5, borderRadius: 100, margin: 5 }} onPress={() => categoryButtonHandler(item.id)}>
                  <Text style={{ fontSize: 12, color: category === item.id ? 'white' : "gray" }}>
                    {item.name}
                  </Text>
                </Button>
              ))
            }
          </ScrollView>
        </View>

      </View>
    </>
  )
}

export default Home