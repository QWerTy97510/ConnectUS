import React from 'react';
import classes from './TrainersPage.module.css';
import TrainerCard from '../../components/TrainerCard/TrainerCard';
import JohnDoeImage from '../../assets/Imagini/17.jpg';
import SophieDeloreImage from '../../assets/Imagini/65.jpg';
import ValentinaAlexeImage from '../../assets/Imagini/76.jpg';
import MateiRichardImage from '../../assets/Imagini/11.jpg';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_TRAINER } from '../../store/actions/actionsType';

const TrainersPage = () => {
  // const [showModal, setShowModal] = useState(false);
  const showModal = useSelector((state) => {
    return state.reducer.showModal;
  });
  const dispatch = useDispatch();

  const trainers = [
    {
      id: 1,
      name: 'John Doe',
      exp: '4 years in WebDev',
      age: 29,
      image: JohnDoeImage,
      address: 'Rome, Italy',
      job: 'Senior Web Developer',
      hobbie: 'Football',
      email: 'john.doe@gmail.com',
      phone: '(0283) 299 481',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    },
    {
      id: 2,
      name: 'SophieDelore',
      exp: '6 years in AppDev',
      age: 32,
      image: SophieDeloreImage,
      address: 'London, England',
      job: 'Senior App Developer',
      hobbie: 'Shopping',
      email: 'sophie.delore@gmail.com',
      phone: '(0293) 679 380',
      description:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word.',
    },
    {
      id: 3,
      name: 'Valentina Alexe',
      exp: '3 years in iOSDev',
      age: 26,
      image: ValentinaAlexeImage,
      address: 'Paris, France',
      job: 'Senior iOS Developer',
      hobbie: 'Reading books',
      email: 'valentina.alexe@gmail.com',
      phone: '(0891) 867 371',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      message:
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    {
      id: 4,
      name: 'Matei Richard',
      exp: '8 years in GameDev',
      age: 30,
      image: MateiRichardImage,
      address: 'Munchen, Germany',
      job: 'Senior Game Developer',
      hobbie: 'Movies',
      email: 'matei.richard@gmail.com',
      phone: '(1876) 220 896',
      description:
        'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    },
  ];

  const modalShowHandler = (trainer) => {
    dispatch({ type: CHANGE_TRAINER, trainer: trainer });
  };

  return (
    <div className={classes.TrainersPage}>
      {showModal ? <Modal /> : null}
      {trainers.map((trainer) => {
        return (
          <TrainerCard
            key={trainer.id}
            image={trainer.image}
            name={trainer.name}
            exp={trainer.exp}
            age={trainer.age}
            modalShow={() => modalShowHandler(trainer)}
          />
        );
      })}
    </div>
  );
};

export default TrainersPage;
