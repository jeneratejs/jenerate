export default function(propertyName) {
  return new RegExp(`<%[ ]*${propertyName}[ ]*%>`, 'gi');
}
