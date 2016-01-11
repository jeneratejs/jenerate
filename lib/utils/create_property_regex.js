export default function(property) {
  return new RegExp(`<%[ ]*${property}[ ]*%>`, 'gi');
}
