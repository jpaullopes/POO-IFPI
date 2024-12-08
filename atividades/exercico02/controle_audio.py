class controle_de_audio:
    def __init__(self): 
        self.volume = 2
    
    def aumentar_volume(self):
        if self.volume < 10:
            self.volume += 1
        else:
            print("Volume no máximo!")
    
    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1
        else:
            print("Volume no mínimo!")

    def mostrar_volume(self):
        print(f"Volume: {self.volume}")

def main():
    controle = controle_de_audio()
    controle.mostrar_volume()
    controle.aumentar_volume()
    controle.mostrar_volume()
    controle.diminuir_volume()
    controle.mostrar_volume()
    
if __name__ == "__main__":
    main()