import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import Accordion from 'react-native-collapsible/Accordion';
import { AntDesign } from '@expo/vector-icons';



/**OPTION_LIST: dummy data */
const OPTION_LIST = [
  { index: '1', title: 'List A', icon: '', value: [{ id: '1', text: 'Appointment', icon: '' }, { id: '2', text: 'Trips', icon: '' }, { id: '3', text: 'Passwords', icon: '' }, { id: '4', text: 'Pitches', icon: '' }, { id: '5', text: 'Updates', icon: '' }] },
  { index: '2', title: 'List B', icon: '', value: [{ id: '1', text: 'Appointment', icon: '' }, { id: '2', text: 'Trips', icon: '' }, { id: '3', text: 'Passwords', icon: '' }, { id: '4', text: 'Pitches', icon: '' }, { id: '5', text: 'Updates', icon: '' }] }

]

export default function AccordionComponent() {

  // local state variable 
  const [activeSections, setActiveSections] = useState([0]);

  // update function for local state variable
  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  // @renderHeader => the category title or header for each category
  const renderHeader = (content, index, isActive, sections) => {

    return (
      <View style={tw`flex-row justify-between items-center pt-4 pb-4 pl-7 pr-5 border-b border-gray-200`}>
        <Text style={tw.style('text-black', 'text-xl', { fontFamily: 'Inter_500Medium' })}>{content.title}</Text>

        <AntDesign name={isActive ? 'up' : 'down'} style={tw`font-bold text-black`} />
      </View>
    );
  };

  /*@renderContent => the panel element for each category */
  const renderContent = (content, index, isActive, sections) => {
    let { value } = content 

    return (
      <>
        {
          value.map((item, index) =>
            <View key={item.id} style={tw`pl-7 border-b border-gray-100 pt-4 pb-4`}>

              <Text style={tw.style('text-black', 'text-xs', { fontFamily: 'Inter_500Medium' })}>{item.text}</Text>
            </View>
          )
        }
      </>
    );
  };


  /**rendering of the screen with an accordion element */
  return (
    <View style={tw`bg-white flex-1`}>

        <View style={tw`bg-blue-500 justify-center pt-12`}>
            <Text style={
                tw.style('pb-2', 'pt-2', 'text-center', 'text-3xl', 'text-white', 'font-bold', '',
                    { fontFamily: 'Inter_400Regular' })}>List</Text>
        </View>

        <Accordion
            sections={OPTION_LIST}
            keyExtractor={(item, index) => index}
            activeSections={activeSections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={setSections}
            underlayColor={'transparent'}
        />

    </View>

)
}

