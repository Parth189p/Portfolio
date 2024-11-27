import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Lookr.fyi (US-based Startup)',
        description: "Developed an AI-driven search engine for fashion products, enabling user-centric query-based discovery through a RAG-based deep search solution integrating text, vector, and image search capabilities. Leveraged Azure AI Search, Azure Machine Learning, and PromptFlow to design an efficient and scalable system. The solution incorporated Azure Functions for microservices, Cosmos DB for vector storage, and Blob Storage for seamless log management. Deployed and managed the complete life cycle on Azure, ensuring robust production operations while driving ongoing enhancements to optimize system performance.",
        tools: ['Azure AI','Azure Machine Learning','Azure Openai','Hugging-face','RAG','Prompt engineering','Python',],
        role: 'AI/Ml Engineer',
        code: '',
        demo: '',
        image : crefin,
        
    },
    {
        id: 2,
        name: 'Jewel.AI (On - Site)',
        description: "Me and my team  build an AI application tailored for the jewelry industry, automating image-based description generation. This involved fine-tuning a unique jewelry image generator model using stable diffusion with LoRA. To enhance functionality, I integrated various open-source models into the system. I also fostered a collaborative environment across front-end, back-end, and DevOps teams, streamlining integration processes for efficient deployment.",
        tools: ['Tensorflow','OpenCV','Replicate Ai','Openai Api','Hugging-face','Stable-diffusion','Prompt engineering','LoRA','Confluence','Git','Python',],
        role: 'AI/Ml Engineer',
        code: '',
        demo: '',
        image : crefin,
        
    },
    {
        id: 3,
        name: 'Failure Prediction of Compressor in Oil-Rig (On - Site)',
        description: 'Spearheaded the development of a predictive maintenance project focused on compressor systems, achieving a significant enhancement in accuracy from 84% to 90% with a 3-4 member team. Using TensorFlow and LSTM, I led the implementation of advanced predictive modeling techniques. Additionally, I applied rigorous feature engineering, data cleaning, and preprocessing methods including PCA, ridge, and lasso to optimize model performance.',
        tools: [ 'Tensorflow','Keras','LSTM','Python','Pandas','Numpy','Scikit-learn','Matplotlib'],
        role: 'Machine Learning Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Face Recognition Project with MLOps',
        description: 'This is the project where I showcased my expertise in model building, focusing on TensorFlow and VGG16 architecture for transfer learning to develop advanced deep learning models. I integrated deep learning techniques using openCV and haarcascade for precise face detection applications. To ensure efficient development and deployment, I incorporated MLOps best practices, utilizing MLflow for model tracking, DVC for data versioning, and Dagshub for collaboration and experiment management. For scalable cloud-based deployment on AWS, I implemented Docker, leveraging TensorBoard for visualization and customized log structures to enhance debugging efficiency.',
        tools: ['TensorFlow', 'MlFlow' , 'DVC' , 'Git-hub Actions' , 'Docker', 'OpenCV' ,'AWS', 'Dagshub', 'Tensorboard', 'EC2', 'ECR'],
        code: '',
        role: 'Machine Learning Engineer',
        demo: '',
        image : realEstate,
    },
    {
        id: 5,
        name: 'Deep Learning-driven Text Summarization',
        description: "In this project I developed a text summarization solution using PyTorch and Google’s Pegasus model, leveraging deep learning principles in NLP with advanced architectures like Transformers. I utilized Docker for containerized deployment, demonstrating scalability and operational efficiency. Furthermore, I implemented AWS CI/CD deployment through GitHub Actions, encompassing IAM user creation, ECR repository setup, EC2 machine configuration, and Docker installation. This project underscores my skills in AI, NLP, containerization, and cloud deployment, reflecting my ability to deliver robust and scalable solutions in machine learning-driven applications.",
        tools: ['PyTorch', 'Docker' , 'AWS' , 'FASTAPI','IAM','EC2','ECR','GitHub Actions'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Machine Learning Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },