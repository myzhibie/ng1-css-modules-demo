//action creators
export const DO_SEARCH='DO_SEARCH';
export const DO_SELECT='DO_SELECT';
export const DO_RESET='DO_RESET';

export function doFilter(searchText){
  return {
    type:DO_SEARCH,
    payload:{
      searchText
    }
  };
}

export function doSelect(selected){
  return {
    type:DO_SELECT,
    payload:{
      selected
    }
  }
}

export function doReset(){
  return {
    type:DO_RESET,
    payload:{
      target:'searchTable'
    }
  };
}

// export default {doFilter,doSelect};