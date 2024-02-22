const getCardContainerStyle = (selectedCard: any, cardIndex: any) => ({
  height: '25%',
  width: '100%',
  marginTop: 20,
  borderWidth: 2,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 20,
  backgroundColor: selectedCard === cardIndex ? '#E6ECFF' : 'transparent',
  borderColor: selectedCard === cardIndex ? '#2563EB' : '#ADBCFF',
});

const Style = {
  cardContainer: getCardContainerStyle as any,
  mainView: {
    height: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  } as any,
  imageView: {
    height: '20px',
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as any,
  radioView: {
    height: '20px',
    width: '25%',
    display: 'flex',
    alignItems: 'center',
  } as any,
  RadioButton: {
    height: '10px',
    width: '20px',
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
  } as any,
  textView: {
    height: '50%',
    width: '100%',
    marginTop: '6%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as any,
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  } as any,
};

export default Style;
