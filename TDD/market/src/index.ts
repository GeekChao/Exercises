interface IHomer {
  name(): string
}

class Homer implements IHomer {
  public name() {
        return "Homer Simpson"
  }
}

export default new Homer()
