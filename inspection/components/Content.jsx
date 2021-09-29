const Content = ({ body }) => {
  return (
    <>
      <div className="content" dangerouslySetInnerHTML={{ __html: body }}></div>
      <style jsx>{`
        .content {
          width: 90vw;
          margin: 2rem auto;
        }
        @media (min-width: 768px) {
          .content {
            width: 720px;
          }
        }
        @media (min-width: 1024px) {
          .content {
            width: 960px;
          }
        }
      `}</style>
    </>
  )
}

export default Content
