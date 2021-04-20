
export function getNameShort(names){
    let name=names.split(' ');
    let initials = name[0].substring(0, 1).toUpperCase();
      
      if (name.length > 1) {
          initials += name[name.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
  }