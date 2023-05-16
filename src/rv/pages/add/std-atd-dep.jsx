import React from 'react';
import Searchbar from '../../components/searchbar';
import { defaultTheme } from 'react-select';

export default function StdAtdDep() {
  var batch = [
    {"val":"2019-2023","name":"Batch"},
    {"val":"2018-2022","name":"Batch"},
    {"val":"2017-2021","name":"Batch"},
    {"val":"2016-2020","name":"Batch"},
  ];
  var year = [
    {"val":"1","name":"Year"},
    {"val":"2","name":"Year"},
    {"val":"3","name":"Year"},
    {"val":"4","name":"Year"},
  ]
  var dep = [
    {"val":"IT","name":"Department"},
    {"val":"AIDS","name":"Department"},
    {"val":"CSE","name":"Department"},
    {"val":"MECH","name":"Department"},
    {"val":"ECE","name":"Department"},
    {"val":"EEE","name":"Department"},
  ];
  var sem = [
    {"val":"1","name":"Semester"},
    {"val":"2","name":"Semester"},
    {"val":"3","name":"Semester"},
    {"val":"4","name":"Semester"},
    {"val":"5","name":"Semester"},
    {"val":"6","name":"Semester"},
    {"val":"7","name":"Semester"},
    {"val":"8","name":"Semester"},
   
  ];

  var data = [year,dep,sem]
  return (
    <div>
    <Searchbar  data = {data}></Searchbar>

    </div>
  )
}
