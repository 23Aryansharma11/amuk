const HomeCards = () => {
  return (
    <section className="w-11/12 flex  items-center justify-around gap-5 pb-20">
        <div className="md:px-20 py-5 md:py-10 px-5 rounded-2xl bg-amuk-foreground overflow-hidden flex flex-col justify-center items-center  gap-2">
        <img src="/icons/account.svg" alt="" className="size-10 md:size-20 text-amuk-accent " />
        <h6>Sign Up</h6>
        </div>
        <div className="md:px-20 py-5 md:py-10 px-5 rounded-2xl bg-amuk-foreground overflow-hidden flex flex-col justify-center items-center gap-2">
        <img src="/icons/form.svg" alt="" className="size-10 md:size-20 text-amuk-accent " />
        <h6>Create Post</h6>
        </div>
        <div className="md:px-20 py-5 md:py-10 px-5 rounded-2xl bg-amuk-foreground overflow-hidden flex flex-col justify-center items-center gap-2">
        <img src="/icons/link.svg" alt="" className="size-10 md:size-20 text-amuk-accent " />
        <h6>Share Link</h6>
        </div>
    </section>
  )
}

export default HomeCards